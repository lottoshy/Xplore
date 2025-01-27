import React from 'react'

export const Includes = ({includes}) => {
  return (
    <li className='flex gap-4'><svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 16 9 C 16.25575 9 16.511531 9.0974687 16.707031 9.2929688 C 17.098031 9.6839688 17.098031 10.316031 16.707031 10.707031 L 11.707031 15.707031 C 11.512031 15.902031 11.256 16 11 16 C 10.744 16 10.487969 15.902031 10.292969 15.707031 L 7.2929688 12.707031 C 6.9019687 12.316031 6.9019688 11.683969 7.2929688 11.292969 C 7.6839688 10.901969 8.3160313 10.901969 8.7070312 11.292969 L 11 13.585938 L 15.292969 9.2929688 C 15.488469 9.0974688 15.74425 9 16 9 z"></path>
</svg> <p className='opacity-80'>{includes}</p></li>
  )
}

export const Excludes = ({excludes}) => {
    return(
        <li className='flex gap-4'><svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#000000" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="translate(-53.01934,128) rotate(-45) scale(10.66667,10.66667)"><path d="M12,2c-5.514,0 -10,4.486 -10,10c0,5.514 4.486,10 10,10c5.514,0 10,-4.486 10,-10c0,-5.514 -4.486,-10 -10,-10zM16.25,12.75h-3.5v3.5c0,0.414 -0.336,0.75 -0.75,0.75c-0.414,0 -0.75,-0.336 -0.75,-0.75v-3.5h-3.5c-0.414,0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75h3.5v-3.5c0,-0.414 0.336,-0.75 0.75,-0.75c0.414,0 0.75,0.336 0.75,0.75v3.5h3.5c0.414,0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75z"></path></g></g>
</svg><p className='opacity-80'>{excludes}</p></li>
    )
}

export const Day = ({day, activity}) => {
    return(
        <div className='w-3/4 p-5 rounded-xl h-auto flex gap-20 border  hover:border-black hover:border bg-[#EBEBEB]'><p className='w-[100px] font-bold'>DAY 0{day}</p>{activity}<p></p></div>
    )
}

