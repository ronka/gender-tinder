import { TinderItem } from "@/types/TinderCard";

const items = [
  { title: "כיסא", emoji: "🪑", gender: "m" },
  { title: "דלעת", emoji: "🎃", gender: "f" },
  { title: "סלט", emoji: "🥗", gender: "m" },
  { title: "עוגה", emoji: "🍰", gender: "f" },
  { title: "עט", emoji: "✒️", gender: "m" },
  { title: "ספר", emoji: "📖", gender: "m" },
  { title: "דלת", emoji: "🚪", gender: "f" },
  { title: "מחשב", emoji: "💻", gender: "m" },
  { title: "טלפון", emoji: "📞", gender: "m" },
  { title: "מחברת", emoji: "📓", gender: "f" },
  { title: "עיפרון", emoji: "✏️", gender: "m" },
  { title: "מחק", emoji: "🧼", gender: "m" },
  { title: "מקלדת", emoji: "⌨️", gender: "f" },
  { title: "עכבר", emoji: "🖱️", gender: "m" },
  { title: "מסך", emoji: "🖥️", gender: "m" },
  { title: "מנורה", emoji: "🪔", gender: "f" },
  { title: "שולחן", emoji: "🪑", gender: "m" },
  { title: "מיטה", emoji: "🛏️", gender: "f" },
  { title: "ארון", emoji: "🚪", gender: "m" },
  { title: "מראה", emoji: "🪞", gender: "f" },
  { title: "מגבת", emoji: "🛁", gender: "f" },
  { title: "סבון", emoji: "🧼", gender: "m" },
  { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
  { title: "משחת שיניים", emoji: "🦷", gender: "f" },
  { title: "מסרק", emoji: "🪮", gender: "m" },
  { title: "מפתח", emoji: "🔑", gender: "m" },
  { title: "ארנק", emoji: "👛", gender: "m" },
  { title: "תיק", emoji: "👜", gender: "m" },
  { title: "מעיל", emoji: "🧥", gender: "m" },
  { title: "כובע", emoji: "🧢", gender: "m" },
  { title: "נעל", emoji: "👠", gender: "f" },
  { title: "גרב", emoji: "🧦", gender: "mixed" },
  { title: "מכנסיים", emoji: "👖", gender: "m" },
  { title: "חולצה", emoji: "👚", gender: "f" },
  { title: "חצאית", emoji: "👗", gender: "f" },
  { title: "שמלה", emoji: "👗", gender: "f" },
  { title: "כפפה", emoji: "🧤", gender: "f" },
  { title: "מטריה", emoji: "☔", gender: "f" },
  { title: "שמש", emoji: "☀️", gender: "f" },
  { title: "ירח", emoji: "🌚", gender: "m" },
];

const data: Record<string, { name: string; items: TinderItem[] }> = {
  default: {
    name: "default",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "21-02-2024": {
    name: "beta#0",
    items: [
      { title: "עכבר", emoji: "🖱️", gender: "m" },
      { title: "מסך", emoji: "🖥️", gender: "m" },
      { title: "מנורה", emoji: "🪔", gender: "f" },
      { title: "שולחן", emoji: "🪑", gender: "m" },
      { title: "מיטה", emoji: "🛏️", gender: "f" },
      { title: "ארון", emoji: "🚪", gender: "m" },
      { title: "מראה", emoji: "🪞", gender: "f" },
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
    ],
  },
  "22-02-2024": {
    name: "beta#1",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "23-02-2024": {
    name: "beta#1",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "24-02-2024": {
    name: "beta#3",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "25-02-2024": {
    name: "beta#4",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "03-03-2024": {
    name: "beta#0",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
    ],
  },
  "04-03-2024": {
    name: "#0",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "05-03-2024": {
    name: "#1",
    items: [
      { title: "עכבר", emoji: "🖱️", gender: "m" },
      { title: "מסך", emoji: "🖥️", gender: "m" },
      { title: "מנורה", emoji: "🪔", gender: "f" },
      { title: "שולחן", emoji: "🪑", gender: "m" },
      { title: "מיטה", emoji: "🛏️", gender: "f" },
      { title: "ארון", emoji: "🚪", gender: "m" },
      { title: "מראה", emoji: "🪞", gender: "f" },
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
    ],
  },
  "06-03-2024": {
    name: "#2",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מכנסיים", emoji: "👖", gender: "m" },
      { title: "חולצה", emoji: "👚", gender: "f" },
      { title: "חצאית", emoji: "👗", gender: "f" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "כפפה", emoji: "🧤", gender: "f" },
      { title: "מטריה", emoji: "☔", gender: "f" },
      { title: "שמש", emoji: "☀️", gender: "f" },
      { title: "ירח", emoji: "🌚", gender: "m" },
    ],
  },
  "07-03-2024": {
    name: "#3",
    items: [
      { title: "מגבת", emoji: "🛁", gender: "f" },
      { title: "סבון", emoji: "🧼", gender: "m" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "מוח", emoji: "🧠", gender: "m" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
    ],
  },
  "08-03-2024": {
    name: "#4",
    items: [
      { title: "כיסא", emoji: "🪑", gender: "m" },
      { title: "דלעת", emoji: "🎃", gender: "f" },
      { title: "סלט", emoji: "🥗", gender: "m" },
      { title: "עוגה", emoji: "🍰", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "מפתח", emoji: "🔑", gender: "m" },
      { title: "ארנק", emoji: "👛", gender: "m" },
      { title: "תיק", emoji: "👜", gender: "m" },
      { title: "מעיל", emoji: "🧥", gender: "m" },
      { title: "כובע", emoji: "🧢", gender: "m" },
      { title: "נעל", emoji: "👠", gender: "f" },
      { title: "גרב", emoji: "🧦", gender: "mixed" },
      { title: "מברשת שיניים", emoji: "🪥", gender: "f" },
      { title: "משחת שיניים", emoji: "🦷", gender: "f" },
      { title: "מסרק", emoji: "🪮", gender: "m" },
      { title: "שמלה", emoji: "👗", gender: "f" },
      { title: "שולחן", emoji: "🪑", gender: "m" },
      { title: "מיטה", emoji: "🛏️", gender: "f" },
      { title: "ארון", emoji: "🚪", gender: "m" },
      { title: "מראה", emoji: "🪞", gender: "f" },
    ],
  },
};

export default data;
