export default function Input(props) {
  console.log("Conteúdo da Props:", { ...props }); //
  return (
    <input
      className="border border-slate-300 h-10 outline-cyan-200 px-4 px-2 rounded-md"
      //   type={props.type}
      //   placeholder={props.placeholder}
      //   value={props.value}
      //   onChange={props.onChange}

      // Usando o spreed
      {...props}
    />
  );
}
