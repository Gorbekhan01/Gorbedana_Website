

export function Dropdown({sizes = [],size , setSize}) {

    const handleChange = (event)=>{
        setSize(event.target.value)
    }

    return (
        <form className="max-w-sm mx-auto rounded-2xl">
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                سایز
            </label>

            <select
                value={size}
                onChange={handleChange}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">سایز</option>
                {
                    sizes.map((size, index) => (
                        <option key={index} value={size} className="text-white">
                            {size}
                        </option>
                    ))
                }
            </select>
        </form>
    );


}

