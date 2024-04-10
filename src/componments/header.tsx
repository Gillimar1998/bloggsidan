import Link from "next/link";
import variables from '../styles/variables.module.scss'

export default function Header(){
    return (
        <>
            <header className={variables.header}>
                <h1>Bloggsíðan</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                Forsíða
                            </Link>
                        </li>
                        <li>
                            <Link href="/bloggid">
                                Bloggið
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}