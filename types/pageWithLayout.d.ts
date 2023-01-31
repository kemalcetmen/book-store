import { NextPage } from "next"
import type { ReactElement } from "react"
import MainLayout from '@/components/layouts/Main'
import LoginLayout from "@/components/layouts/Login"

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout }
export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout }
export type PageWithLayoutType =
 | PageWithMainLayoutType
 | PageWithAdminLayoutType
export type LayoutProps = ({
 children,
}: {
 children: ReactElement
}) => ReactElement
export default PageWithLayoutType
