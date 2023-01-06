import {FC, ReactNode} from "react";

export const Container: FC<{children: ReactNode}> =({children}) => {
    return <div className=" mx-2 lg:mx-28">{children}</div>
}

export const ContainerFluid: FC<{children: ReactNode}> =({children}) => {
    return <div>{children}</div>
}