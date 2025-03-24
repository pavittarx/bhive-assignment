import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Header() {
    return (
        <section className="h-[88px]">
            <header className="fixed py-[25px] bg-background z-10 bg-white w-full left-1/2 transform -translate-x-1/2">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/bhive-logo.png"
                                    alt="BHIVE WORKSPACE LOGO"
                                    width={125}
                                    height={40}
                                    className="h-10 w-auto"
                                    unoptimized
                                />
                            </Link>
                        </div>

                        {/* Call Section */}
                        <div className="flex items-center">
                            <button className="p-2 rounded-lg hover:bg-accent transition-colors">
                                <Phone className="h-6 w-6 text-accent-foreground" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}
