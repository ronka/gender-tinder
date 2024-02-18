import React, { useMemo } from "react";

const useCardsRef = (length: number) => {
	const cardRefs=	useMemo(
			() =>
			Array(length)
				.fill(0)
				.map(() => React.createRef<{swipe: (dir: "left" | "right") => Promise<void>, restoreCard: () => Promise<void>}>()),
			[]
		);

  return cardRefs
};

export {useCardsRef}