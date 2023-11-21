import { useEffect, useState, useRef } from "react";

export function useActiveHeader(selector: string) {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>(
    {},
  );
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll(selector));

    const observer = new IntersectionObserver(
      (headings) => {
        headingElementsRef.current = headings.reduce(
          (
            map: { [key: string]: IntersectionObserverEntry },
            headingElement,
          ) => {
            map[headingElement.target.id] = headingElement;
            return map;
          },
          headingElementsRef.current,
        );

        const visibleHeadings: IntersectionObserverEntry[] = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement: IntersectionObserverEntry =
            headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id: string) =>
          headingElements.findIndex((heading) => heading.id === id);

        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id),
          );
          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      },
      {
        rootMargin: "-95px 0px -60% 0px",
      },
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);

  return { activeId };
}
