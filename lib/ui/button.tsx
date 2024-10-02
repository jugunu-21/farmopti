export default function Gradientbutton (  {text,cta}:{text:string,cta?:string}){
    return(
    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-amber-600 from-40% to-amber-400 px-4 py-2 font-medium text-black transition-transform hover:scale-105 active:scale-95">
    {text}
  </button>)
}