import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { roboto } from "@/styles/fonts";

const MainLayout = ({children}) => {
    return (
        <>
            <header className={roboto.className}>
                <Header />
                <Hero />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    )
}

export default MainLayout;