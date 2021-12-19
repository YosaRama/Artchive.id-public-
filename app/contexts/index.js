import TemplateContextProvider from "./_template";

function GlobalContext(props) {
  return (
    <>
      <TemplateContextProvider>{props.children}</TemplateContextProvider>
    </>
  );
}

export default GlobalContext;
