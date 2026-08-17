import type { SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="
          M256 64
          C150 64 64 150 64 256
          C64 362 150 448 256 448
          C302 448 344 432 377 405
          V405
          C377 425 393 441 413 441
          C433 441 449 425 449 405
          V256
          C449 150 363 64 256 64
          Z

          M256 144
          C318 144 368 194 368 256
          C368 318 318 368 256 368
          C194 368 144 318 144 256
          C144 194 194 144 256 144
          Z
        "
        clipRule="evenodd"
      />
    </svg>
  )
}
