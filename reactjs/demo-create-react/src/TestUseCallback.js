import { memo } from "react";

function TestUseCallback({onIncrease}) {
    console.log("re---render")
    return ( <></> );
}

export default memo(TestUseCallback);