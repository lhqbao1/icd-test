import { cva } from 'class-variance-authority';
import * as LR from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export type Icon = LucideProps


const Mail = (props: Icon) => {
    return (
        <svg id="mail" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" {...props}>
            <g id="Layer_1">
                <g id="Layer_1-2" data-name="Layer_1">
                    <path id="Path_58" data-name="Path 58" d="M19.3.6A2.514,2.514,0,0,0,17.6,0H2.4A2.514,2.514,0,0,0,.7.6,1.815,1.815,0,0,0,0,2.113V13.887A1.815,1.815,0,0,0,.7,15.4a2.514,2.514,0,0,0,1.7.6H17.6a2.514,2.514,0,0,0,1.7-.6,1.815,1.815,0,0,0,.7-1.509V2.113A1.815,1.815,0,0,0,19.3.6ZM17.6,13.987H2.4V4.327L10,9.66l7.6-5.333v9.66ZM10,7.547,2.4,2.113H17.6L10,7.447Z" transform="translate(0)" fill="#fff" />
                </g>
            </g>
        </svg>

    )
}

const Home = (props: Icon) => {
    return (
        <svg id="home" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" {...props}>
            <g id="Layer_1">
                <path id="Path_85" data-name="Path 85" d="M2.3,17.8H5.7V11h6.8v6.8h3.4V7.9L9.1,2.8,2.3,7.9ZM0,20V6.8L9,0l9,6.8V20H10.1V13.3H7.9V20Z" fill="#fff" />
            </g>
        </svg>
    )
}
const Icons = {
    ChevronLeft: LR.ChevronLeft,
    ChevronRight: LR.ChevronRight,
    Mail,
    Home
}

const iconVariants = cva('', {
    variants: {
        size: {
            xs: 'size-3',
            sm: 'size-4',
            md: 'size-6',
            lg: 'size-8',
            xl: 'size-12',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export { Icons, iconVariants }