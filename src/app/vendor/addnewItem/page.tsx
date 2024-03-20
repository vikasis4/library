'use client'
import StyledButton from '@/package/ui/StyledButton'
import React from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { log } from 'console'

var name = 'vikas'

function page() {

    const router = useRouter()
    const [form, setForm] = React.useState({
        name: '',
        price: '',
        images: '',
        email: ''
    });


    React.useEffect(() => {
        var user = localStorage.getItem('userId');
        console.log(user);
        
        // const newUser = JSON.parse(user)
        // setForm({ ...form, email: newUser?.email });
    }, [])


    const handleImageInputChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.split(',')[1];
                setForm({ ...form, images: base64String });
            };
            reader.readAsDataURL(file);
        }
    };

    const addNewProduct = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/product/createProduct', form).then(async (response) => {
                if (response.data.sucess === 'true') {
                    alert('Product added Successfully')
                } else {
                    alert('Something went wrong, please try again')
                }
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };



    return (
        <>
            <div className="bg-gray-300 flex justify-around items-center shadow-md">
                <h1 className="font-poppin">Welcome_{name}</h1>
                <div className="flex py-8 gap-4">
                    <StyledButton txt="Product Status" fxn={() => { }} />
                    <StyledButton txt="Request Item" fxn={() => { }} />
                    <StyledButton txt="View Product" fxn={() => { }} />
                    <StyledButton txt="Log Out" fxn={() => { }} />
                </div>
            </div>
            <div className="pb-12 flex justify-between items-center px-8 mt-20">
                <div className="py-14 px-10 flex flex-col gap-2 bg-gray-300 rounded-md shadow-md">
                    <h1>Product Name</h1>
                    <input alt="Hover text" className="rounded-md py-2 px-6 font-poppin" title="userId" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" name="name" />
                    <h1 >Product Price</h1>
                    <input className="rounded-md py-2 px-6 font-poppin" title="password" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} type="number" name="price" />
                    <h1 >Product Image</h1>
                    <input
                        className="rounded-md py-2 px-6 font-poppin"
                        title="img"
                        onChange={handleImageInputChange}
                        type="file"
                        accept="image/*"
                    />

                    <div className="flex gap-4 mt-12">
                        <StyledButton txt="Submit" fxn={addNewProduct} />
                        <StyledButton txt="Cancel" fxn={() => { router.push('/') }} />
                    </div>
                </div>
                <div className="bg-gray-300 shadow-md rounded-md flex justify-between items-center px-8">

                </div>
            </div>
        </>
    )
}

export default page