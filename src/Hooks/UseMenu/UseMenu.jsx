import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://el-carino-bistro-server.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setMenu(data)
        })
    },[])
    return [menu, loading];
}

export default useMenu;