export const getStaticData = async (endpoint: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}${endpoint}`,
        { cache: 'force-cache' }
    )

    const data = response.json();

    return data
} 

export const getDynamicData = async (endpoint: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}${endpoint}`, 
        { cache: 'no-store' }
    )

    const data = response.json();

    return data
} 

export const getRevalidatedData = async (endpoint: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}${endpoint}`,
        { next: { revalidate: 10 } }
    )

    const data = response.json();

    return data
}
