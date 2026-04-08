import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: React.ReactNode
  stagger?: number
  className?: string
}

export function StaggerContainer({ children, stagger = 0.1, className }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StaggerItem({ children, className, delay = 0 }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
