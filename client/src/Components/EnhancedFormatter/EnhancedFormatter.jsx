import React from "react";
import "./EnhancedFormatter.css";

// Enhanced formatter component that properly handles formatted text
const EnhancedFormatter = ({ text }) => {
  // Function to parse text and create properly styled elements
  const formatContent = (text) => {
    if (!text) return [];

    // Split the text by line breaks
    const lines = text.split("\n");

    // Track current section
    let currentSection = null;
    let result = [];
    let listItems = [];

    // Process each line
    lines.forEach((line, index) => {
      // Handle day headers (appears as "**Day X: Title**")
      if (line.match(/^\*\*(Day \d+:.+)\*\*$/)) {
        // Complete any open list
        if (listItems.length > 0) {
          result.push(
            <ul key={`list-${index}`} className="itinerary-list">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        const title = line.replace(/^\*\*|\*\*$/g, "");
        result.push(
          <div key={`day-${index}`} className="itinerary-day">
            <h3>{title}</h3>
          </div>
        );
      }
      // Handle section headers (appears as "* **Section:**")
      else if (line.match(/^\* \*\*(.+):\*\*/)) {
        // Complete any open list
        if (listItems.length > 0) {
          result.push(
            <ul key={`list-${index}`} className="itinerary-list">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        const sectionTitle = line.match(/^\* \*\*(.+):\*\*/)[1];
        currentSection = sectionTitle;
        result.push(
          <h4 key={`section-${index}`} className="itinerary-section">
            {sectionTitle}
          </h4>
        );
      }
      // Handle list items (appears as "- Item text")
      else if (line.match(/^- (.+)/)) {
        const itemText = line.match(/^- (.+)/)[1];
        // Process bold text within list items
        const processedText = processBoldText(itemText);

        listItems.push(
          <li key={`item-${index}`} className="itinerary-item">
            {processedText}
          </li>
        );
      }
      // Handle major section titles (appears as "**Title**" alone)
      else if (
        line.match(/^\*\*([^*]+)\*\*$/) &&
        !line.match(/\*\*.+:.+\*\*/)
      ) {
        // Complete any open list
        if (listItems.length > 0) {
          result.push(
            <ul key={`list-${index}`} className="itinerary-list">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        const title = line.replace(/^\*\*|\*\*$/g, "");
        result.push(
          <h2 key={`title-${index}`} className="itinerary-title">
            {title}
          </h2>
        );
      }
      // Handle empty lines
      else if (line.trim() === "") {
        // Complete any open list
        if (listItems.length > 0) {
          result.push(
            <ul key={`list-${index}`} className="itinerary-list">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        result.push(
          <div key={`space-${index}`} className="itinerary-space"></div>
        );
      }
      // Handle regular text
      else {
        // Complete any open list
        if (listItems.length > 0) {
          result.push(
            <ul key={`list-${index}`} className="itinerary-list">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        // Process bold text within paragraph
        const processedText = processBoldText(line);
        result.push(
          <p key={`text-${index}`} className="itinerary-text">
            {processedText}
          </p>
        );
      }
    });

    // Make sure we add any remaining list items
    if (listItems.length > 0) {
      result.push(
        <ul key="list-final" className="itinerary-list">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  // Process bold text within a line (converts **text** to <strong>text</strong>)
  const processBoldText = (text) => {
    if (!text.includes("**")) return text;

    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const content = part.slice(2, -2);
        return (
          <strong key={i} className="highlighted-text">
            {content}
          </strong>
        );
      }
      return part;
    });
  };

  return <div className="itinerary-container">{formatContent(text)}</div>;
};

export default EnhancedFormatter;
