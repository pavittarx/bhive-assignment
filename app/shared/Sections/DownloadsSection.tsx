import Image from "next/image"
import Link from "next/link"
import { oneLine } from "common-tags"
import { Card, CardContent } from "@/components/ui/card"

export const DownloadOurApp = () => {
    return (
        <section className="container mx-auto mb-[120px]">
            <h2
                className={oneLine`
                        ml-[20px]
                        text-[24px]
                        lg:text-[36px]
                        lg:mb-[40px]
                    `}
            >
                Download our app now
            </h2>
            <div>
                <Card
                    className={oneLine`
                                    m-[20px]
                                    pt-20
                                    lg:mt-[180px]
                                `}
                >
                    <CardContent
                        className={oneLine`
                                lg:flex 
                                lg:relative 
                                lg:justify-between
                            `}
                    >
                        <div className="flex-1">
                            <Image
                                className={oneLine`
                                    lg:absolute 
                                    lg:bottom-[-14px]
                                `}
                                src="/appsimage.jpg"
                                alt="app store"
                                width={400}
                                height={350}
                            />
                        </div>
                        <div
                            className={oneLine`
                            flex-1
                            flex
                            lg:block
                            `}
                        >
                            <p
                                className={oneLine`
                                    pb-4
                                    font-medium 
                                    text-[20px] 
                                    leading-[28px] 
                                    w-[586px] 
                                    text-[var(--text-tertiary)]
                                    hidden
                                    lg:block
                                    `}
                            >
                                Boost your productivity with the BHIVE Workspace
                                app. <br />
                                Elevate your workspace, collaborate efficiently,
                                and unlock exclusive perks.
                            </p>
                            <div
                                className={oneLine`
                                            flex 
                                            gap-4
                                            mx-auto
                                            my-4
                                        `}
                            >
                                <Link href="https://play.google.com">
                                    <Image
                                        src="/googleplay.png"
                                        alt="google play"
                                        width={146}
                                        height={45}
                                    />
                                </Link>
                                <Link href="https://appstore.com">
                                    <Image
                                        src="/appstore.png"
                                        alt="app store"
                                        width={145}
                                        height={45}
                                    />
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
