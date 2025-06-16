interface BatanLinkProps {
    href: string;
    text:string;
    className?: string;
}

const BtnLInk = ({href, text, className = "" }: BatanLinkProps) => {
  return (
     
       <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border bg-violet-700 dark:bg-violet-600 cursor-pointer  ${className}`}>
        <span className="relative z-10 text-white">{text}</span>
       </a>
   
  )
}

export default BtnLInk