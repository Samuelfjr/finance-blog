import Header from "@/components/Header/Header";
import { roboto } from "@/styles/fonts";

const MainLayout = ({children}) => {
    return (
        <>
            <header className={roboto.className}>
                <Header />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    )
}

export default MainLayout;