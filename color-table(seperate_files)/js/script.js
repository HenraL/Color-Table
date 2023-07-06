var err = 84,
  success = 0;
function col() {
  var colourValue = document.getElementById('baliseColor').value;
  var columnChoice = "";
  var blocks = [
    "baliseColorFin", "baliseColorFin2", "baliseColorFin3", "baliseColorFin4", "baliseColorFin5", "baliseColorFin6", "baliseColorFin7", "baliseColorFin8",
    "baliseColorFin9", "baliseColorFin10", "baliseColorFin11", "baliseColorFin12", "baliseColorFin13", "baliseColorFin14", "baliseColorFin15", "baliseColorFin16",
    "baliseColorFin17", "baliseColorFin18", "baliseColorFin19", "baliseColorFin20", "baliseColorFin21", "baliseColorFin22", "baliseColorFin23", "baliseColorFin24",
    "baliseColorFin25", "baliseColorFin26", "baliseColorFin27", "baliseColorFin28", "baliseColorFin29", "baliseColorFin30", "baliseColorFin31", "baliseColorFin32",
    "baliseColorFin33", "baliseColorFin34", "baliseColorFin35", "baliseColorFin36", "baliseColorFin37", "baliseColorFin38", "baliseColorFin39", "baliseColorFin40",
    "baliseColorFin41", "baliseColorFin42", "baliseColorFin43", "baliseColorFin44", "baliseColorFin45", "baliseColorFin46", "baliseColorFin47", "baliseColorFin48",
    "baliseColorFin49", "baliseColorFin50", "baliseColorFin51", "baliseColorFin52", "baliseColorFin53", "baliseColorFin54", "baliseColorFin55", "baliseColorFin56",
    "baliseColorFin57", "baliseColorFin58", "baliseColorFin59", "baliseColorFin60", "baliseColorFin61", "baliseColorFin62", "baliseColorFin63", "baliseColorFin64",
    "baliseColorFin65", "baliseColorFin66", "baliseColorFin67", "baliseColorFin68", "baliseColorFin69", "baliseColorFin70", "baliseColorFin71", "baliseColorFin72",
    "baliseColorFin73", "baliseColorFin74", "baliseColorFin75", "baliseColorFin76", "baliseColorFin77", "baliseColorFin78", "baliseColorFin79", "baliseColorFin80",
    "baliseColorFin81", "baliseColorFin82", "baliseColorFin83", "baliseColorFin84", "baliseColorFin85", "baliseColorFin86", "baliseColorFin87", "baliseColorFin88",
    "baliseColorFin89", "baliseColorFin90", "baliseColorFin91", "baliseColorFin92", "baliseColorFin93", "baliseColorFin94", "baliseColorFin95", "baliseColorFin96",
    "baliseColorFin97", "baliseColorFin98", "baliseColorFin99", "baliseColorFin100", "baliseColorFin101", "baliseColorFin102", "baliseColorFin103", "baliseColorFin104",
    "baliseColorFin105", "baliseColorFin106", "baliseColorFin107", "baliseColorFin108", "baliseColorFin109", "baliseColorFin110", "baliseColorFin111", "baliseColorFin112",
    "baliseColorFin113", "baliseColorFin114", "baliseColorFin115", "baliseColorFin116", "baliseColorFin117", "baliseColorFin118", "baliseColorFin119", "baliseColorFin120",
    "baliseColorFin121", "baliseColorFin122", "baliseColorFin123", "baliseColorFin124", "baliseColorFin125", "baliseColorFin126", "baliseColorFin127", "baliseColorFin128",
    "baliseColorFin129", "baliseColorFin130", "baliseColorFin131", "baliseColorFin132", "baliseColorFin133", "baliseColorFin134", "baliseColorFin135", "baliseColorFin136",
    "baliseColorFin137", "baliseColorFin138", "baliseColorFin139", "baliseColorFin140", "baliseColorFin141", "baliseColorFin142", "baliseColorFin143", "baliseColorFin144",
    "baliseColorFin145", "baliseColorFin146", "baliseColorFin147", "baliseColorFin148", "baliseColorFin149", "baliseColorFin150", "baliseColorFin151", "baliseColorFin152",
    "baliseColorFin153"
  ]
  var options = {
    "nothing": "",
    "co": "color:",
    "baco": "background-color:",
    "boco": "border-color:",
    "btco": "border-top-color:",
    "bbco": "border-bottom-color:",
    "brco": "border-right-color:",
    "blco": "border-left-color:",
    "oco": "outline-color:",
    "tdco": "text-decoration-color:",
    "cco": "caret-color:",
    "crco": "column-rule-color:",
    "stco": "stop-color:",
    "bisco": "border-inline-start-color:",
    "bieco": "border-inline-end-color:",
    "bbeco": "border-block-end-color:",
    "bbsco": "border-block-start-color:",
    "flco": "flood-color:",
    "lico": "lighting-color:",
    "bico": "border-block-color:",
    "sico": "border-inline-color:",
    "s3co": "scrollbar-3dlight-color:",
    "saco": "scrollbar-arrow-color:",
    "sbco": "scrollbar-base-color:",
    "sdco": "scrollbar-darkshadow-color:",
    "sfco": "scrollbar-face-color:",
    "shco": "scrollbar-highlight-color:",
    "ssco": "scrollbar-shadow-color:",
    "stco": "scrollbar-track-color:",
    "scco": "scrollbar-color:",
    "teco": "text-emphasis-color:",
    "mcrco": "-moz-column-rule-color:",
    "mtdco": "-moz-text-decoration-color:",
    "wcrco": "-webkit-column-rule-color:"
  }
  if (colourValue in options) {
    columnChoice = options[colourValue];
  } else {
    return err;
  }
  console.log(columnChoice);
  for (var i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).innerHTML = columnChoice;
  }
}

function semii() {
  var val = document.getElementById('semi').value;
  var blocks = [
    "semiFin", "semiFin2", "semiFin3", "semiFin4", "semiFin5", "semiFin6", "semiFin7", "semiFin8",
    "semiFin9", "semiFin10", "semiFin11", "semiFin12", "semiFin13", "semiFin14", "semiFin15", "semiFin16",
    "semiFin17", "semiFin18", "semiFin19", "semiFin20", "semiFin21", "semiFin22", "semiFin23", "semiFin24",
    "semiFin25", "semiFin26", "semiFin27", "semiFin28", "semiFin29", "semiFin30", "semiFin31", "semiFin32",
    "semiFin33", "semiFin34", "semiFin35", "semiFin36", "semiFin37", "semiFin38", "semiFin39", "semiFin40",
    "semiFin41", "semiFin42", "semiFin43", "semiFin44", "semiFin45", "semiFin46", "semiFin47", "semiFin48",
    "semiFin49", "semiFin50", "semiFin51", "semiFin52", "semiFin53", "semiFin54", "semiFin55", "semiFin56",
    "semiFin57", "semiFin58", "semiFin59", "semiFin60", "semiFin61", "semiFin62", "semiFin63", "semiFin64",
    "semiFin65", "semiFin66", "semiFin67", "semiFin68", "semiFin69", "semiFin70", "semiFin71", "semiFin72",
    "semiFin73", "semiFin74", "semiFin75", "semiFin76", "semiFin77", "semiFin78", "semiFin79", "semiFin80",
    "semiFin81", "semiFin82", "semiFin83", "semiFin84", "semiFin85", "semiFin86", "semiFin87", "semiFin88",
    "semiFin89", "semiFin90", "semiFin91", "semiFin92", "semiFin93", "semiFin94", "semiFin95", "semiFin96",
    "semiFin97", "semiFin98", "semiFin99", "semiFin100", "semiFin101", "semiFin102", "semiFin103", "semiFin104",
    "semiFin105", "semiFin106", "semiFin107", "semiFin108", "semiFin109", "semiFin110", "semiFin111", "semiFin112",
    "semiFin113", "semiFin114", "semiFin115", "semiFin116", "semiFin117", "semiFin118", "semiFin119", "semiFin120",
    "semiFin121", "semiFin122", "semiFin123", "semiFin124", "semiFin125", "semiFin126", "semiFin127", "semiFin128",
    "semiFin129", "semiFin130", "semiFin131", "semiFin132", "semiFin133", "semiFin134", "semiFin135", "semiFin136",
    "semiFin137", "semiFin138", "semiFin139", "semiFin140", "semiFin141", "semiFin142", "semiFin143", "semiFin144",
    "semiFin145", "semiFin146", "semiFin147", "semiFin148", "semiFin149", "semiFin150", "semiFin151", "semiFin152",
    "semiFin153", "semiFin154"
  ]
  var semiColonChoice = "";
  if (val == "semi") {
    semiColonChoice = ";";
  }
  console.log(val);
  console.log(semiColonChoice);

  for (var i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).innerHTML = semiColonChoice;
  }
}
