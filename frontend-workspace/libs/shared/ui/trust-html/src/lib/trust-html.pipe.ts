import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHTML'
})
export class TrustHtmlPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string, ...args: unknown[]): unknown {
    const s1 = value.replace('<body>', '');
    const s2 = s1.replace('</body>', '');
    const trimmed = s2.trim();
    return this.sanitizer.bypassSecurityTrustHtml(trimmed);
  }

}
