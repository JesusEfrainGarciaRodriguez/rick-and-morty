import { useEffect, useState } from "react"

const localCache = {};

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
        
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async () => {

        // Usar caché en caso de existir
        if( localCache[url] ) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        // Limpiar data
        setLoadingState();

        const response = await fetch(url);

        // Si hay algún error al ejecutar la petición
        if( !response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });

            return;
        }

        // Si no hay error extraer data
        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
        
        // Manejo de caché
        localCache[url] = data;
    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

export default useFetch