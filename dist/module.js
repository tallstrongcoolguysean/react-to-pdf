import {useRef as $hgUW1$useRef, useCallback as $hgUW1$useCallback} from "react";
import $hgUW1$html2canvaspro from "html2canvas-pro";
import $hgUW1$jspdf from "jspdf";




const $234747a9630b4642$export$bc7c183068c332b6 = 3.77952755906;
let $234747a9630b4642$export$3e4ff2216a90b8a4;
(function(Resolution) {
    Resolution[Resolution["LOW"] = 1] = "LOW";
    Resolution[Resolution["NORMAL"] = 2] = "NORMAL";
    Resolution[Resolution["MEDIUM"] = 3] = "MEDIUM";
    Resolution[Resolution["HIGH"] = 7] = "HIGH";
    Resolution[Resolution["EXTREME"] = 12] = "EXTREME";
})($234747a9630b4642$export$3e4ff2216a90b8a4 || ($234747a9630b4642$export$3e4ff2216a90b8a4 = {}));
let $234747a9630b4642$export$e717bcf55e1dfb40;
(function(Margin) {
    Margin[Margin["NONE"] = 0] = "NONE";
    Margin[Margin["SMALL"] = 5] = "SMALL";
    Margin[Margin["MEDIUM"] = 10] = "MEDIUM";
    Margin[Margin["LARGE"] = 25] = "LARGE";
})($234747a9630b4642$export$e717bcf55e1dfb40 || ($234747a9630b4642$export$e717bcf55e1dfb40 = {}));
const $234747a9630b4642$export$93ca5d3f8675ae4c = {
    method: "save",
    resolution: $234747a9630b4642$export$3e4ff2216a90b8a4.MEDIUM,
    page: {
        margin: $234747a9630b4642$export$e717bcf55e1dfb40.NONE,
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


class $d6bf1d6779fcee23$export$2e2bcd8739ae039 {
    constructor(canvas, options){
        this.canvas = canvas;
        this.options = options;
        this.pdf = new (0, $hgUW1$jspdf)({
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
        return this.getMarginTopMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getMarginBottom() {
        return this.getMarginBottomMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getMarginLeft() {
        return this.getMarginLeftMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getMarginRight() {
        return this.getMarginRightMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getScale() {
        return this.options.resolution;
    }
    getPageHeight() {
        return this.getPageHeightMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getPageHeightMM() {
        return this.pdf.internal.pageSize.height;
    }
    getPageWidthMM() {
        return this.pdf.internal.pageSize.width;
    }
    getPageWidth() {
        return this.getPageWidthMM() * (0, $234747a9630b4642$export$bc7c183068c332b6);
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
        return this.getPageAvailableWidth() / (0, $234747a9630b4642$export$bc7c183068c332b6);
    }
    getPageAvailableHeightMM() {
        return this.getPageAvailableHeight() / (0, $234747a9630b4642$export$bc7c183068c332b6);
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
                width: canvasPage.width / (this.getScale() * (0, $234747a9630b4642$export$bc7c183068c332b6) * this.getHorizontalFitFactor()),
                height: canvasPage.height / (this.getScale() * (0, $234747a9630b4642$export$bc7c183068c332b6) * this.getHorizontalFitFactor()),
                x: this.getMarginLeftMM(),
                y: this.getMarginTopMM()
            });
            pageNumber += 1;
        }
        return this.pdf;
    }
}



const $fab42eb3dee39b5b$export$697e52778de11d88 = (options)=>{
    if (!options) return 0, $234747a9630b4642$export$93ca5d3f8675ae4c;
    return {
        ...(0, $234747a9630b4642$export$93ca5d3f8675ae4c),
        ...options,
        canvas: {
            ...(0, $234747a9630b4642$export$93ca5d3f8675ae4c).canvas,
            ...options.canvas
        },
        page: {
            ...(0, $234747a9630b4642$export$93ca5d3f8675ae4c).page,
            ...options.page
        }
    };
};



const $149c1bd638913645$var$getTargetElement = (targetRefOrFunction)=>{
    if (typeof targetRefOrFunction === "function") return targetRefOrFunction();
    return targetRefOrFunction?.current;
};
const $149c1bd638913645$export$398b9fbd663a6614 = (usePDFoptions)=>{
    const targetRef = (0, $hgUW1$useRef)();
    const toPDF = (0, $hgUW1$useCallback)((toPDFoptions)=>{
        return $149c1bd638913645$var$generatePDF(targetRef, usePDFoptions ?? toPDFoptions);
    }, [
        targetRef,
        usePDFoptions
    ]);
    return {
        targetRef: targetRef,
        toPDF: toPDF
    };
};
const $149c1bd638913645$var$generatePDF = async (targetRefOrFunction, customOptions)=>{
    const options = (0, $fab42eb3dee39b5b$export$697e52778de11d88)(customOptions);
    const targetElement = $149c1bd638913645$var$getTargetElement(targetRefOrFunction);
    if (!targetElement) {
        console.error("Unable to get the target element.");
        return;
    }
    const canvas = await (0, $hgUW1$html2canvaspro)(targetElement, {
        useCORS: options.canvas.useCORS,
        logging: options.canvas.logging,
        scale: options.resolution,
        ...options.overrides?.canvas
    });
    const converter = new (0, $d6bf1d6779fcee23$export$2e2bcd8739ae039)(canvas, options);
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
var $149c1bd638913645$export$2e2bcd8739ae039 = $149c1bd638913645$var$generatePDF;


export {$149c1bd638913645$export$398b9fbd663a6614 as usePDF, $149c1bd638913645$export$2e2bcd8739ae039 as default, $234747a9630b4642$export$3e4ff2216a90b8a4 as Resolution, $234747a9630b4642$export$e717bcf55e1dfb40 as Margin};
//# sourceMappingURL=module.js.map
