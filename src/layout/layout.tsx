type LayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = (props: LayoutProps) => {
    return (
        <div className="w-[300px] h-[400px] border-2 border-amber-500">
            {props.children}
        </div>
    );
};
