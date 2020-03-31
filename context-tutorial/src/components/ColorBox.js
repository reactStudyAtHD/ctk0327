import React from "react";
import ColorContext, {ColorConsumer} from "../contexts/color";

const ColorBox=()=>{
    return(
        <ColorConsumer>
            {value=>(
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background:value.color
                    }}
                />
            )}
        </ColorConsumer>
    );
};

export default ColorBox;