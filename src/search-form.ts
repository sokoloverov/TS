import { renderBlock } from './lib.js'
import { searchFormCollect } from './search.js'

export function renderSearchFormBlock(data1?: string, data2?: string) {

  const now = new Date();
  const dataMin = now.getFullYear() + '-' + (now.getMonth().toString() + 1) + '-' + now.getDate();
  console.log('dataMin ', dataMin);

  now.setDate(now.getDate() + 1);
  data1 = now.getFullYear() + '-' + (now.getMonth().toString() + 1) + '-' + now.getDate();
  now.setDate(now.getDate() + 3);
  data2 = now.getFullYear() + '-' + (now.getMonth().toString() + 1) + '-' + now.getDate();
  const now1 = new Date(now.getFullYear(), now.getMonth(), 31);
  const dataMax = now1.getFullYear() + '-' + (now1.getMonth().toString() + 2) + '-' + now1.getDate();
  console.log('dataMax ', dataMax);

  const dataForm = document.getElementsByTagName('button');
  dataForm.addEventListener('submit', (e: { target: any; }): void => {
    console.log('event.target: ', e.target);
    console.log('searchFormCollect:', searchFormCollect());
  });



  renderBlock(
    'search-form-block',
    `
    <form onsubmit="submit">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${data1}" min="${dataMin}" max="${dataMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${data2}" min="${dataMin}" max="${dataMax}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><input type="submit" value="Найти"></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}





