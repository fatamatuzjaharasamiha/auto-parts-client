import { useQuery } from "react-query"

const useProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('allproducts', () => fetch('https://rocky-wildwood-73268.herokuapp.com/product').then(res => res.json()))


    return [products, isLoading, refetch]
}
export default useProducts