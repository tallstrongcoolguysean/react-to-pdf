var $8zHUo$react = require("react");
var $8zHUo$html2canvaspro = require("html2canvas-pro");
var $8zHUo$jspdf = require("jspdf");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "usePDF", () => $882b6d93070905b3$export$398b9fbd663a6614);
$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Resolution", () => $af8d31735c159a26$export$3e4ff2216a90b8a4);
$parcel$export(module.exports, "Margin", () => $af8d31735c159a26$export$e717bcf55e1dfb40);



const $af8d31735c159a26$export$bc7c183068c332b6 = 3.77952755906;
let $af8d31735c159a26$export$3e4ff2216a90b8a4;
(function(Resolution) {
    Resolution[Resolution["LOW"] = 1] = "LOW";
    Resolution[Resolution["NORMAL"] = 2] = "NORMAL";
    Resolution[Resolution["MEDIUM"] = 3] = "MEDIUM";
    Resolution[Resolution["HIGH"] = 7] = "HIGH";
    Resolution[Resolution["EXTREME"] = 12] = "EXTREME";
})($af8d31735c159a26$export$3e4ff2216a90b8a4 || ($af8d31735c159a26$export$3e4ff2216a90b8a4 = {}));
let $af8d31735c159a26$export$e717bcf55e1dfb40;
(function(Margin) {
    Margin[Margin["NONE"] = 0] = "NONE";
    Margin[Margin["SMALL"] = 5] = "SMALL";
    Margin[Margin["MEDIUM"] = 10] = "MEDIUM";
    Margin[Margin["LARGE"] = 25] = "LARGE";
})($af8d31735c159a26$export$e717bcf55e1dfb40 || ($af8d31735c159a26$export$e717bcf55e1dfb40 = {}));
const $af8d31735c159a26$export$93ca5d3f8675ae4c = {
    method: "save",
    resolution: $af8d31735c159a26$export$3e4ff2216a90b8a4.MEDIUM,
    page: {
        margin: $af8d31735c159a26$export$e717bcf55e1dfb40.NONE,
        format: "A4",
        orientation: "portrait"
    },
    canvas: {
        mimeType: "image/jpeg",
        qualityRatio: 1,
        useCORS: true,
        logging: false
    },
    overrides: {}
};


class $7c1078c7547cae26$export$2e2bcd8739ae039 {
    constructor(canvas, options){
        this.canvas = canvas;
        this.options = options;
        this.pdf = new (0, ($parcel$interopDefault($8zHUo$jspdf)))({
            format: this.options.page.format,
            orientation: this.options.page.orientation,
            ...this.options.overrides?.pdf,
            unit: "mm"
        });
    }
    getMarginTopMM() {
        const margin = typeof this.options.page.margin === "object" ? this.options.page.margin.top : this.options.page.margin;
        return Number(margin);
    }
    getMarginLeftMM() {
        const margin = typeof this.options.page.margin === "object" ? this.options.page.margin.left : this.options.page.margin;
        return Number(margin);
    }
    getMarginRightMM() {
        const margin = typeof this.options.page.margin === "object" ? this.options.page.margin.right : this.options.page.margin;
        return Number(margin);
    }
    getMarginBottomMM() {
        const margin = typeof this.options.page.margin === "object" ? this.options.page.margin.bottom : this.options.page.margin;
        return Number(margin);
    }
    getMarginTop() {
        return this.getMarginTopMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getMarginBottom() {
        return this.getMarginBottomMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getMarginLeft() {
        return this.getMarginLeftMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getMarginRight() {
        return this.getMarginRightMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getScale() {
        return this.options.resolution;
    }
    getPageHeight() {
        return this.getPageHeightMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getPageHeightMM() {
        return this.pdf.internal.pageSize.height;
    }
    getPageWidthMM() {
        return this.pdf.internal.pageSize.width;
    }
    getPageWidth() {
        return this.getPageWidthMM() * (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getOriginalCanvasWidth() {
        return this.canvas.width / this.getScale();
    }
    getOriginalCanvasHeight() {
        return this.canvas.height / this.getScale();
    }
    getCanvasPageAvailableHeight() {
        return this.getPageAvailableHeight() * this.getScale() * this.getHorizontalFitFactor();
    }
    getPageAvailableWidth() {
        return this.getPageWidth() - (this.getMarginLeft() + this.getMarginRight());
    }
    getPageAvailableHeight() {
        return this.getPageHeight() - (this.getMarginTop() + this.getMarginBottom());
    }
    getPageAvailableWidthMM() {
        return this.getPageAvailableWidth() / (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getPageAvailableHeightMM() {
        return this.getPageAvailableHeight() / (0, $af8d31735c159a26$export$bc7c183068c332b6);
    }
    getNumberPages() {
        return Math.ceil(this.canvas.height / this.getCanvasPageAvailableHeight());
    }
    getHorizontalFitFactor() {
        if (this.getPageAvailableWidth() < this.getOriginalCanvasWidth()) return this.getOriginalCanvasWidth() / this.getPageAvailableWidth();
        return 1;
    }
    getCanvasOffsetY(pageNumber) {
        return this.getCanvasPageAvailableHeight() * (pageNumber - 1);
    }
    getCanvasHeightLeft(pageNumber) {
        return this.canvas.height - this.getCanvasOffsetY(pageNumber);
    }
    getCanvasPageHeight(pageNumber) {
        if (this.canvas.height < this.getCanvasPageAvailableHeight()) return this.canvas.height;
        const canvasHeightPending = this.getCanvasHeightLeft(pageNumber);
        return canvasHeightPending < this.getCanvasPageAvailableHeight() ? canvasHeightPending : this.getCanvasPageAvailableHeight();
    }
    getCanvasPageWidth() {
        return this.canvas.width;
    }
    createCanvasPage(pageNumber) {
        const canvasPageWidth = this.getCanvasPageWidth();
        const canvasPageHeight = this.getCanvasPageHeight(pageNumber);
        const canvasPage = document.createElement("canvas");
        canvasPage.setAttribute("width", String(canvasPageWidth));
        canvasPage.setAttribute("height", String(canvasPageHeight));
        const ctx = canvasPage.getContext("2d");
        ctx.drawImage(this.canvas, 0, this.getCanvasOffsetY(pageNumber), this.canvas.width, canvasPageHeight, 0, 0, this.canvas.width, canvasPageHeight);
        return canvasPage;
    }
    convert() {
        let pageNumber = 1;
        const numberPages = this.getNumberPages();
        while(pageNumber <= numberPages){
            if (pageNumber > 1) this.pdf.addPage(this.options.page.format, this.options.page.orientation);
            const canvasPage = this.createCanvasPage(pageNumber);
            const pageImageDataURL = canvasPage.toDataURL(this.options.canvas.mimeType, this.options.canvas.qualityRatio);
            this.pdf.setPage(pageNumber);
            this.pdf.addImage({
                imageData: pageImageDataURL,
                width: canvasPage.width / (this.getScale() * (0, $af8d31735c159a26$export$bc7c183068c332b6) * this.getHorizontalFitFactor()),
                height: canvasPage.height / (this.getScale() * (0, $af8d31735c159a26$export$bc7c183068c332b6) * this.getHorizontalFitFactor()),
                x: this.getMarginLeftMM(),
                y: this.getMarginTopMM()
            });
            pageNumber += 1;
        }
        return this.pdf;
    }
}



const $9ba0f9a5c47c04f2$export$697e52778de11d88 = (options)=>{
    if (!options) return 0, $af8d31735c159a26$export$93ca5d3f8675ae4c;
    return {
        ...(0, $af8d31735c159a26$export$93ca5d3f8675ae4c),
        ...options,
        canvas: {
            ...(0, $af8d31735c159a26$export$93ca5d3f8675ae4c).canvas,
            ...options.canvas
        },
        page: {
            ...(0, $af8d31735c159a26$export$93ca5d3f8675ae4c).page,
            ...options.page
        }
    };
};



const $882b6d93070905b3$var$getTargetElement = (targetRefOrFunction)=>{
    if (typeof targetRefOrFunction === "function") return targetRefOrFunction();
    return targetRefOrFunction?.current;
};
const $882b6d93070905b3$export$398b9fbd663a6614 = (usePDFoptions)=>{
    const targetRef = (0, $8zHUo$react.useRef)();
    const toPDF = (0, $8zHUo$react.useCallback)((toPDFoptions)=>{
        return $882b6d93070905b3$var$generatePDF(targetRef, usePDFoptions ?? toPDFoptions);
    }, [
        targetRef,
        usePDFoptions
    ]);
    return {
        targetRef: targetRef,
        toPDF: toPDF
    };
};
const $882b6d93070905b3$var$generatePDF = async (targetRefOrFunction, customOptions)=>{
    const options = (0, $9ba0f9a5c47c04f2$export$697e52778de11d88)(customOptions);
    const targetElement = $882b6d93070905b3$var$getTargetElement(targetRefOrFunction);
    if (!targetElement) {
        console.error("Unable to get the target element.");
        return;
    }
    const canvas = await (0, ($parcel$interopDefault($8zHUo$html2canvaspro)))(targetElement, {
        useCORS: options.canvas.useCORS,
        logging: options.canvas.logging,
        scale: options.resolution,
        ...options.overrides?.canvas
    });
    const converter = new (0, $7c1078c7547cae26$export$2e2bcd8739ae039)(canvas, options);
    const pdf = converter.convert();
    switch(options.method){
        case "build":
            return pdf;
        case "open":
            window.open(pdf.output("bloburl"), "_blank");
            return pdf;
        case "save":
        default:
            {
                const pdfFilename = options.filename ?? `${new Date().getTime()}.pdf`;
                await pdf.save(pdfFilename, {
                    returnPromise: true
                });
                return pdf;
            }
    }
};
var $882b6d93070905b3$export$2e2bcd8739ae039 = $882b6d93070905b3$var$generatePDF;


//# sourceMappingURL=main.js.map
