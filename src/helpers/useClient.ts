import { useEffect, useState } from "react";

const useClient = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

export default useClient;