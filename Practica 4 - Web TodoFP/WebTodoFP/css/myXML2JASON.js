function xml2json(xml,  // element or document DOM node
                  tab)  // tab or indent string for pretty output formatting
                        // omit or use empty string "" to supress.
                        // returns JSON string

function json2xml(obj,  // javascript object 
                  tab)  // tab or indent string for pretty output formatting
                        // omit or use empty string "" to supress.
                        // returns XML string



function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..

            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("cannot parse xml string!");
   return dom;
}

parseXml("source_example/bookStore.xml");
xml2json("source_example/bookStore.xml");