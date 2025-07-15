export type ChildProp = {
    children: React.ReactNode;
}

export type TBurger = {
    openBurger:()=>void;
    closeBurger:()=>void;
    isBurger:boolean;
}