import "./Select.css"

export default function Select(props) {

    let obj = [
        {
            label: 'Gender',
            value: undefined,
        },
        {
            label: 'Male',
            value: 'male',
        },
        {
            label: 'Female',
            value: 'female',
        },
        {
            label: 'Other',
            value: 'other'
        }
    ]

    const handleSelect = (e) => {
        props.callbackSelectGender(e.target.value)
    }

    return (
        <>
            <select onChange={handleSelect}>
                {obj.map((option, key) => (
                    <option key={key} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    )
}
