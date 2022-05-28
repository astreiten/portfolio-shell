import { useEffect } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Microfrontend: React.FC<any> = ({
  window,
  document,
  name,
  host,
}) => {
  let navigate = useNavigate();
  const [fetchingAssets, setFetchingAssets] = React.useState<boolean>(true);

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    let link: HTMLLinkElement;
    let script: HTMLScriptElement;

    if (document.getElementById(scriptId)) {
      console.log("entre al if");
      renderMicroFrontend();
      return;
    }

    setFetchingAssets(false);
    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        setFetchingAssets(true);
        script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = host + manifest.files["main.js"];
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
        if (manifest.files["main.css"]) {
          link = document.createElement("link");
          link.href = host + manifest.files["main.css"];
          link.rel = "stylesheet";
          document.head.appendChild(link);
        }
      })
      .catch((error) => {
        navigate("/notfound");
      });

    return () => {
      try {
        document.getElementById(scriptId)?.remove();
        document.head.removeChild(link);
        document.head.removeChild(script);

        //@ts-ignore
        window[`unmount${name}`](`${name}-container`);
      } catch {}
    };
  }, [name]); //eslint-disable-line react-hooks/exhaustive-deps

  const renderMicroFrontend = () => {
    console.log(window);
    try {
      //@ts-ignore
      window[`render${name}`](`${name}-container`);
    } catch (error) {
      console.log("hubo un error 2");
      console.log(error);
      navigate("/notfound");
    }
  };

  return (
    <main id={`${name}-container`} style={{ display: "flex", flex: 1 }}>
      LOADING
    </main>
  );
};
