import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export function useCountUp(target: number, duration = 1.5) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })
  const rounded = useTransform(spring, (v: number) => Math.round(v))
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, motionValue, target])

  return { ref, rounded }
}
