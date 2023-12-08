import { useEffect, useState, useRef } from "react";

type headingElementsRefType = {
  [headingId: string]: {
    header: IntersectionObserverEntry;
    parentHeader: Element;
  };
};

export function useActiveHeader(selector: string) {
  const headingElementsRef = useRef<headingElementsRefType>({});
  const [activeSlug, setActiveSlug] = useState("");
  const [activeUpperSlug, setActiveUpperSlug] = useState("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll(selector));

    const getIndexFromId = (id: string) =>
      headingElements.findIndex((heading) => heading.id === id);

    const findParentHeader = (
      headingElements: Element[],
      childIndex: number,
    ) => {
      const childLevel = headingElements[childIndex].tagName.substring(1);
      for (let i = childIndex - 1; i >= 0; i--) {
        const currentLevel = headingElements[i].tagName.substring(1);
        if (+currentLevel < +childLevel) {
          return headingElements[i];
        }
      }
      return headingElements[childIndex];
    };

    const observer = new IntersectionObserver(
      (headings) => {
        headingElementsRef.current = headings.reduce(
          (map: headingElementsRefType, headingElement) => {
            map[headingElement.target.id] = {
              header: headingElement,
              parentHeader: findParentHeader(
                headingElements,
                headingElements.findIndex(
                  (heading) => heading.id === headingElement.target.id,
                ),
              ),
            };
            return map;
          },
          headingElementsRef.current,
        );

        const visibleHeadings: {
          header: IntersectionObserverEntry;
          parentHeader: Element;
        }[] = [];
        Object.keys(headingElementsRef.current).map((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.header.isIntersecting) {
            visibleHeadings.push(headingElement);
          }
        });

        if (visibleHeadings.length === 1) {
          setActiveSlug(visibleHeadings[0].header.target.id);
          setActiveUpperSlug(visibleHeadings[0].parentHeader.id);
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) =>
              getIndexFromId(a.header.target.id) -
              getIndexFromId(b.header.target.id),
          );
          setActiveSlug(sortedVisibleHeadings[0].header.target.id);
          setActiveUpperSlug(sortedVisibleHeadings[0].parentHeader.id);
        }
      },
      {
        rootMargin: "-95px 0px -60% 0px",
      },
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector]);

  return { activeSlug, activeUpperSlug };
}
