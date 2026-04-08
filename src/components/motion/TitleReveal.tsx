import { motion } from "framer-motion"

interface Segment {
  text: string
  className?: string
}

interface TitleRevealProps {
  segments: Segment[]
  className?: string
  style?: React.CSSProperties
}

export function TitleReveal({ segments, className, style }: TitleRevealProps) {
  const words = segments.flatMap((segment) =>
    segment.text.split(/\s+/).map((word) => ({
      word,
      className: segment.className,
    }))
  )

  return (
    <h2 className={className} style={style}>
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${item.className ?? ""}`}
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: i * 0.05,
            }}
          >
            {item.word}
          </motion.span>
        </span>
      )).reduce<React.ReactNode[]>((acc, el, i) => {
        if (i === 0) return [el]
        return [...acc, " ", el]
      }, [])}
    </h2>
  )
}
