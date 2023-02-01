import React from 'react'
import { useRouter } from 'next/router'
import { IoIosArrowBack } from 'react-icons/io';

const index = () => {
    const router = useRouter()

    return <IoIosArrowBack onClick={() => router.back()} style={{cursor: 'pointer'}} />
}

export default index