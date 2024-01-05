import { useEffect } from "react"

export default function ProgressStats({stat,value,color}){

useEffect(() => {

    document.documentElement.style.setProperty('--progress-color', color);

},[])

return(
<span className="flex flex-col w-full my-1 ">
<b>{stat === "hp" ? stat.toUpperCase() : stat[0].toUpperCase() + stat.substring(1)}</b>
<progress  className="w-full rounded-sm h-2 " value={value} max={100}></progress>
</span>
)

}