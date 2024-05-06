
export const DropDown = ({ supportedLanguages, label, onChange }) => {


    return (
        <div>
            <p>{label}</p>
            <select onChange={onChange}>
                {
                    Object.entries(supportedLanguages).map(([language, value]) => (
                        <option key={value}>{language}</option>
                    ))

                }
            </select>
        </div>
    )
}
