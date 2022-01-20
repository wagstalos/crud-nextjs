import Titulo from './Titulo';
interface layoutProps {
    titulo: string
    children: any
}

export default function Layout(props:layoutProps){

    return(
        <div className={`
         flex flex-col w-2/3
         bg-white text-gray-800 rounded-sm
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className='p-6'>
                {props.children}
            </div>
        </div>
    )
}