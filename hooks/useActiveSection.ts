'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
  const sectionIdsKey = sectionIds.join('|')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        const nextSectionId = visibleSections[0]?.target?.id
        if (nextSectionId) {
          setActiveSection(nextSectionId)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    const syncWithHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash)
      }
    }

    syncWithHash()
    window.addEventListener('hashchange', syncWithHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncWithHash)
    }
  }, [sectionIdsKey])

  return activeSection
}