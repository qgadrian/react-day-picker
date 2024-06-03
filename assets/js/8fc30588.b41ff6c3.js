"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7686],{9722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(651),i=t(2844);const o={sidebar_position:2},l="Custom Selections",a={id:"advanced-guides/custom-selections",title:"Custom Selections",description:"This documentation is still a work in progress. If you have any questions, ask to the discussions page on Github.",source:"@site/docs/advanced-guides/custom-selections.mdx",sourceDirName:"advanced-guides",slug:"/advanced-guides/custom-selections",permalink:"/next/advanced-guides/custom-selections",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/advanced-guides/custom-selections.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Input Fields",permalink:"/next/advanced-guides/input-fields"},next:{title:"Custom Modifiers",permalink:"/next/advanced-guides/custom-modifiers"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"Week Selection",id:"week-selection",level:3},{value:"Single Selection",id:"single-selection",level:3},{value:"Multi Selections",id:"multi-selections",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components},{BrowserWindow:t,Examples:o}=n;return t||m("BrowserWindow",!0),o||m("Examples",!1),o.CustomMultiple||m("Examples.CustomMultiple",!0),o.CustomSingle||m("Examples.CustomSingle",!0),o.CustomWeek||m("Examples.CustomWeek",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-selections",children:"Custom Selections"}),"\n",(0,s.jsx)(n.admonition,{title:"Draft",type:"info",children:(0,s.jsxs)(n.p,{children:["This documentation is still a work in progress. If you have any questions, ask to the ",(0,s.jsx)(n.a,{href:"https://github.com/gpbl/react-day-picker/discussions",children:"discussions"})," page on Github."]})}),"\n",(0,s.jsxs)(n.p,{children:["If the built-in selection modes are not enough for your app\u2019s requirements, you can control the selection behavior using ",(0,s.jsx)(n.code,{children:"onDayClick"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"week-selection",children:"Week Selection"}),"\n",(0,s.jsx)(n.p,{children:"The following example shows how to select the whole week when a day is clicked."}),"\n",(0,s.jsxs)(n.p,{children:["Note the use of the ",(0,s.jsx)(n.code,{children:"startOfWeek"})," and ",(0,s.jsx)(n.code,{children:"endOfWeek"})," functions from ",(0,s.jsx)(n.code,{children:"date-fns"})," and how the ",(0,s.jsx)(n.code,{children:"selectedWeek"})," state is passed to the ",(0,s.jsx)(n.code,{children:"modifiers"})," prop."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { endOfWeek, isSameWeek, startOfWeek } from "date-fns";\nimport { DateRange, DayPicker } from "react-day-picker";\n\n/** Select the whole week when the day is clicked. */\nexport function CustomWeek() {\n  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>();\n\n  return (\n    <DayPicker\n      showWeekNumber\n      modifiers={{\n        selected: selectedWeek\n      }}\n      onDayClick={(day, modifiers) => {\n        if (modifiers.selected) {\n          setSelectedWeek(undefined); // clear the selection if the week is already selected\n          return;\n        }\n        setSelectedWeek({\n          from: startOfWeek(day),\n          to: endOfWeek(day)\n        });\n      }}\n      onWeekNumberClick={(weekNumber, dates) => {\n        if (selectedWeek?.from && isSameWeek(dates[0], selectedWeek.from)) {\n          setSelectedWeek(undefined); // clear the selection if the week is already selected\n          return;\n        }\n        setSelectedWeek({\n          from: startOfWeek(dates[0]),\n          to: endOfWeek(dates[dates.length - 1])\n        });\n      }}\n      footer={\n        selectedWeek && (\n          <p>\n            Week from {selectedWeek.from.toLocaleDateString()} to\n            {selectedWeek.to.toLocaleDateString()}\n          </p>\n        )\n      }\n    />\n  );\n}\n'})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(o.CustomWeek,{})}),"\n",(0,s.jsx)(n.h3,{id:"single-selection",children:"Single Selection"}),"\n",(0,s.jsxs)(n.p,{children:['For example, to implement the "single selection" behavior (like when ',(0,s.jsx)(n.code,{children:'mode="single"'}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { DayPicker, DayPickerProps } from "react-day-picker";\n\nexport function CustomSingle() {\n  const [selectedDate, setSelectedDate] = useState<Date | undefined>();\n\n  const modifiers: DayPickerProps["modifiers"] = {};\n  if (selectedDate) {\n    modifiers.selected = selectedDate;\n  }\n  return (\n    <DayPicker\n      modifiers={modifiers}\n      onDayClick={(day, modifiers) => {\n        if (modifiers.selected) {\n          setSelectedDate(undefined);\n        } else {\n          setSelectedDate(day);\n        }\n      }}\n      footer={selectedDate && `You selected ${selectedDate.toDateString()}`}\n    />\n  );\n}\n'})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(o.CustomSingle,{})}),"\n",(0,s.jsx)(n.h3,{id:"multi-selections",children:"Multi Selections"}),"\n",(0,s.jsxs)(n.p,{children:["The case of a multi-days select is a bit more complex as it deals with an array. The following example replicates the ",(0,s.jsx)(n.code,{children:'mode="multiple"'}),"\nselection mode."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nimport { isSameDay } from "date-fns";\nimport { DayMouseEventHandler, DayPicker } from "react-day-picker";\n\nexport function CustomMultiple() {\n  const [value, setValue] = useState<Date[]>([]);\n\n  const handleDayClick: DayMouseEventHandler = (day, modifiers) => {\n    const newValue = [...value];\n    if (modifiers.selected) {\n      const index = value.findIndex((d) => isSameDay(day, d));\n      newValue.splice(index, 1);\n    } else {\n      newValue.push(day);\n    }\n    setValue(newValue);\n  };\n\n  const handleResetClick = () => setValue([]);\n\n  let footer = <>Please pick one or more days.</>;\n\n  if (value.length > 0)\n    footer = (\n      <>\n        You selected {value.length} days.{" "}\n        <button onClick={handleResetClick}>Reset</button>\n      </>\n    );\n\n  return (\n    <DayPicker\n      onDayClick={handleDayClick}\n      modifiers={{ selected: value }}\n      footer={footer}\n    />\n  );\n}\n'})}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(o.CustomMultiple,{})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2844:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var s=t(2379);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);