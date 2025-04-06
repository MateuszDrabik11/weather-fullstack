function ToggleButton({ state, callback}) {
    return (
        <>
            <button onClick={callback}
                    className={"flex items-center rounded p-1 transition-colors duration-300 bg-white text-black"}>
                {state}
            </button>
        </>
    );
}
export default ToggleButton;
