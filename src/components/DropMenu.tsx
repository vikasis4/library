import React from 'react'

function DropMenu({ prop }: any) {

    const [drop, setDrop] = React.useState(false);

    return (
        <>
            {
                drop ?
                    null
                    :
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                        onClick={() => setDrop(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">{prop.Registerform.category} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
            }


            {
                drop ?
                    <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li onClick={() => { setDrop(false); prop.setRegisterForm({ ...prop.Registerform, category: "Catering" }) }}>
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Catering</a>
                            </li>
                            <li onClick={() => { setDrop(false); prop.setRegisterForm({ ...prop.Registerform, category: "Florist" }) }}>
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Florist</a>
                            </li>
                            <li onClick={() => { setDrop(false); prop.setRegisterForm({ ...prop.Registerform, category: "Decoration" }) }}>
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Decoration</a>
                            </li>
                            <li onClick={() => { setDrop(false); prop.setRegisterForm({ ...prop.Registerform, category: "Lighting" }) }}>
                                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lighting</a>
                            </li>
                        </ul>
                    </div>
                    :
                    null
            }
        </>

    )
}

export default DropMenu