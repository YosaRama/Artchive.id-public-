import { createContext, useState, useContext } from "react";

const TemplateContext = createContext({
  value: "",
  condition: false,
  someFunction: function () {},
  someFunctionWithVariable: function (variable) {},
});

export function TemplateContextProvider(props) {
  const [isCondition, setIsCondition] = useState(false);
  const [value, setValue] = useState("");

  function thisSetCondition() {
    setIsCondition(!isCondition);
  }

  function thisSetValue(value) {
    setValue(value);
  }

  const context = {
    value: value,
    condition: isCondition,
    someFunction: thisSetCondition,
    someFunctionWithVariable: thisSetValue,
  };

  return (
    <TemplateContext.Provider value={context}>
      {props.children}
    </TemplateContext.Provider>
  );
}

export default TemplateContextProvider;

export const useTemplateCtx = () => useContext(TemplateContext);
