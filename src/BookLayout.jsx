import { Link,Outlet, useSearchParams } from "react-router-dom"
export default function BookLayout(){
    const [number,setNumber] = useSearchParams({n:3})
    return(<>
        <Link to={'1'}>Book 1</Link>
        <Link to={'2'}>Book 2</Link>
        <Link to={`${number.get('n')}`}>Book {number.get('n')}</Link>
        <br />
        <Link to={'new'}>New Book</Link>
        <br />
        <input type="number" value={number.get('n')} onChange={e=> setNumber({n:e.target.value})} name="" id="" />
    </>)
}