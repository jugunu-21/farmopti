import { useRouter } from "next/navigation" 
export default function Gradientbutton (  {text,cta,className}:{text:string,cta:string ,className?:string}){
  const router=useRouter()
    return(
    <button   onClick={() => router.push(cta || '/')} 
    className={`relative scale-100 overflow-hidden rounded-lg bg-green-300 px-4 py-2 font-medium text-black transition-transform hover:scale-105 active:scale-95 ${className}`}>
    {text}
  </button>


)
}

{/* <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-amber-600 from-40% to-amber-400 px-4 py-2 font-medium text-black transition-transform hover:scale-105 active:scale-95">
Try free
</button> */}